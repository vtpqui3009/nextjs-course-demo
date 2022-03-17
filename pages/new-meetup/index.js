import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetUp = () => {
  const router = useRouter();
  const handleAddMeetup = async (data) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    console.log(responseData);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add A New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and creat amazing networking oppotunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  );
};
export default NewMeetUp;
