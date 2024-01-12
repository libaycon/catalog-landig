import MessageIcon from "@/app/ui/icons/message";

function ContactPage(): JSX.Element {
  return (
    <div className="w-full">
      <div className="container m-auto flex flex-row items-end py-20 gap-8">
        <div className="h-0 w-full border-b-[1px] border-solid border-secondary" />
        <div><MessageIcon defColor="#ffc905" /></div>
        <div className="h-0 w-full border-b-[1px] border-solid border-secondary" />
      </div>
    </div>
  );
}
export default ContactPage;