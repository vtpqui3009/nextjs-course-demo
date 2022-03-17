import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetUpList from "../components/meetups/MeetupList";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>NextJs</title>
        <meta
          name="description"
          content="Browse a huge list of  hightly active React meetups"
        />
      </Head>
      <MeetUpList meetups={props.meetups} />
    </>
  );
};
// export async function getServerSideProps (context){
//   const req = context.req;
//   const res = context.res;
//   // fetch data from API
//   return {
//     props : {
//       meetups : DATA
//     }
//   }
// }
export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://vtpqui:vtpq3009@cluster0.bndrg.mongodb.net/nextJSCourse"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups);
  // console.log(JSON.stringify({ name: "test", age: 20 }));
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        image: meetup.data.image,
        title: meetup.data.title,
        description: meetup.data.description,
        address: meetup.data.address,
        id: meetup._id.toString(),
      })),
      revalidate: 10,
    },
  };
}
export default Home;
