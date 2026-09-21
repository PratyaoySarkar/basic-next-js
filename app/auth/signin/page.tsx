
export default function signin(){
    return(
        <div className="h-screen flex justify-center items-center flex-col bg-amber-50 w-full px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <div className="text-3xl font-extrabold text-black text-center">
                    Sign In
                </div>
                <div className="pt-2">
                    <LabelledInput label="Username" placeholder="adsfdsgffsdgf@gmail.com" />
                    <LabelledInput label="Password" type={"password"} placeholder="2134tfgewf#" />
                    <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-200
                    font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign In</button>
                </div>
          </div>
        </div>
    )
}

interface LabelInputType{
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({label, placeholder, type}: LabelInputType){
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
        rounded-lg focust:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}