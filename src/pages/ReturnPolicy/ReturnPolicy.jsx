import { useEffect } from "react";
import parse from "html-react-parser";
import { useGetReturnPolicyQuery } from "../../redux/api/returnPolicy";

export default function ReturnPolicy() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data } = useGetReturnPolicyQuery();
  const returnPolicy = data?.data[0];
  const content = data?.data?.length > 0 && parse(returnPolicy?.content);

  return (
    <section className="py-5">
      <div className="container">{content}</div>
    </section>
  );
}
