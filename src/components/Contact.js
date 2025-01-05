const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-2xl ">This is contact us page</h1>

      <input className=" m-2 p-2 border-blue-600" placeholder="name"></input>
      <input className=" m-2 p-2 border-blue-600" placeholder="message"></input>
      <button className="bg-black text-white m-2 p-2">submit</button>
    </div>
  );
};

export default Contact;
