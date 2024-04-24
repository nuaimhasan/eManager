import { useEffect } from "react";
import { useGetPrivacyPolicyQuery } from "../../redux/api/privacyPolicy";
import parse from "html-react-parser";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data } = useGetPrivacyPolicyQuery();
  const privacyPolicy = data?.data[0];
  const content = data?.data?.length > 0 && parse(privacyPolicy?.content);

  return (
    <section className="py-5">
      <div className="container">{content}</div>
    </section>
  );
}
