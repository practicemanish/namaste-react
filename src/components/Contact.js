const Contact = () => {

return(
    <div>
        <h1 className="font-bold text-3xl m-4 p-4">Hello my Contact us page</h1>
        <form>
            <input type="text" className="border border-black p-2 m-2" placeholder="Name" />
            <input type="text" className=" border border-black p-2 m-2" placeholder="message for me " />
            <button className="border border-gray-700 p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
        </form>
        
    </div>

)

}
export default Contact;