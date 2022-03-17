import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetUpDetail = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        src={props.meetupData.image}
        title={props.meetupData.title}
        description={props.meetupData.description}
        address={props.meetupData.address}
      />
    </>
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://vtpqui:vtpq3009@cluster0.bndrg.mongodb.net/nextJSCourse"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetUpId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetUpId = context.params.meetUpId;
  const client = await MongoClient.connect(
    "mongodb+srv://vtpqui:vtpq3009@cluster0.bndrg.mongodb.net/nextJSCourse"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetUp = await meetupsCollection.findOne({
    _id: ObjectId(meetUpId),
  });
  console.log(selectedMeetUp);
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetUp._id.toString(),
        title: selectedMeetUp.data.title,
        image: selectedMeetUp.data.image,
        description: selectedMeetUp.data.description,
        address: selectedMeetUp.data.address,
      },
    },
  };
}
export default MeetUpDetail;
