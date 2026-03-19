import React from 'react';

function Footer(props) {
    return (
        <div className="w-full p-10 mx-auto bg-gray-900 text-white mt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="mb-4">
                    <h5 className="font-bold mb-3 text-lg">About</h5>
                    <ul className="list-none">
                        <li className="mb-2 text-gray-400">Our story</li>
                        <li className="mb-2 text-gray-400">Awards</li>
                        <li className="mb-2 text-gray-400">Our Team</li>
                        <li className="mb-2 text-gray-400">Career</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h5 className="font-bold mb-3 text-lg">About</h5>
                    <ul className="list-none">
                        <li className="mb-2 text-gray-400">Our story</li>
                        <li className="mb-2 text-gray-400">Awards</li>
                        <li className="mb-2 text-gray-400">Our Team</li>
                        <li className="mb-2 text-gray-400">Career</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h5 className="font-bold mb-3 text-lg">Company</h5>
                    <ul className="list-none">
                        <li className="mb-2 text-gray-400">Our services</li>
                        <li className="mb-2 text-gray-400">Clients</li>
                        <li className="mb-2 text-gray-400">Contact</li>
                        <li className="mb-2 text-gray-400">Press</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h5 className="font-bold mb-3 text-lg">Resources</h5>
                    <ul className="list-none">
                        <li className="mb-2 text-gray-400">Blog</li>
                        <li className="mb-2 text-gray-400">Newsletter</li>
                        <li className="mb-2 text-gray-400">Privacy Policy</li>
                    </ul>
                </div>
                <div className="mb-4 col-span-2 md:col-span-2 lg:col-span-2">
                    <h5 className="font-bold mb-3 text-lg ">Subscribe</h5>
                    <div className="flex mb-2 gap-2 ">
                        <input type="email" className="w-full p-2 text-black focus:outline-none rounded-lg" placeholder="Enter email address" />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full " type="button">Subscribe</button>
                    </div>
                    <p className="text-gray-400 text-sm">Get digital marketing updates in your mailbox</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;