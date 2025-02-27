import { RoastType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/roastTypes`;

const getRoastTypes = async (): Promise<RoastType[]> => {
  const res = await fetch(URL);

  return res.json();
}

export default getRoastTypes;