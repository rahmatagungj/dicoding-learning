import type { NextPage, GetServerSideProps } from "next";
import CardCourse from "../components/CardCourse";

const Home: NextPage = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      {data &&
        data.map((item: any) => <CardCourse key={item.id} item={item} />)}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://dicoding-api.vercel.app/api/courses");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
