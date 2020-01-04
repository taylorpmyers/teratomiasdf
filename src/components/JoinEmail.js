import React from "react"
import PatreonButton from '../img/patreonButton.png'


function JoinEmail(props) {

    return (
        <div className={props.display || "block mb-6"}>
            <div className="text-white max-w-xs bg-teal-600 flex flex-wrap mx-auto py-6 justify-center rounded">
                <div className="block mb-4">Subscribe for updates</div>
                <div className="border rounded overflow-hidden flex">
                    <input type="text" className="p1-2 py-2" placeholder="Your email..."></input>
                    <button className="flex items-center justify-center px-1 bg-pink-700">
                        Subscribe
                </button>
                </div>
            </div>
            <div className="text-white max-w-xs bg-black flex flex-wrap mx-auto mt-8 py-6 justify-center rounded">
                <div className="block mb-4 mx-4">To support me, get deals on books and early access to blogs and flash fics become a patron.</div>
                <img className = "w-64" alt="patreon logo next to subscribe button" src={PatreonButton} />
            </div>
        </div>
    )
}

export default JoinEmail