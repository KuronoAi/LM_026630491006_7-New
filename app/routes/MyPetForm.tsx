import React, { useState } from 'react';

let nextId = 0;

function Pets() {
    const [name, setName] = useState('');
    const [cate, setCate] = useState('');
    const [sex, setSex] = useState('');
    const [desc, setDesc] = useState('');
    const [own, setOwn] = useState('');
    const [ownn, setOwnn] = useState('');
    const [pets, setPets] = useState([]);

    function handleClickAdd(n, c, s, d, o, on) {
        console.log("Pet Form: ", pets);
        setPets([
            ...pets,
            {
                id: nextId++,
                name: n,
                category: c,
                sex: s,
                desc: d,
                owner: o,
                ownername: on,
            }
        ]);
    }

    function handleViewCard(pet) {
        alert(`Name: ${pet.name}\nCategory: ${pet.category}\nSex: ${pet.sex}\nDescription: ${pet.desc}\nOwner: ${pet.owner}\nOwnername: ${pet.ownername}`);
    }

    return (
        <div>
            <h1>Pet Form:</h1>
            <label>Name:</label>
            <input
                name="cName"
                className="border-1"
                onChange={(e) => setName(e.target.value)}
            /><br />
            <label>Category:</label>
            <select
                name="cCategory"
                className="border-1"
                onChange={(e) => setCate(e.target.value)}
            >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
            </select>

            <div>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={(e) => setSex(e.target.value)}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={(e) => setSex(e.target.value)}
                    />
                    Female
                </label>
            </div>
            <label>Description:</label>
            <textarea
                name="cDesc"
                rows={4}
                cols={50}
                className="border-2"
                onChange={(e) => setDesc(e.target.value)}
            />
            <hr />
            <label>Owner:</label>
            <input
                name="cOwner"
                className="border-1"
                onChange={(e) => setOwn(e.target.value)}
            /><br />
            <label>Owner Email:</label>
            <input
                name="cOwnern"
                className="border-1"
                onChange={(e) => setOwnn(e.target.value)}
            /><br />

            <button
                onClick={() => handleClickAdd(name, cate, sex, desc, own, ownn)}
                className="border bg-green-300 h-18 w-20"
            >
                Add Pet Form
            </button>
            <hr />
            <h1>Pet Lists:</h1>
            {pets.length === 0 ? (
                <p>No Pet available</p>
            ) : (
                <table className="border-collapse border border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">ID</th>
                            <th className="border border-gray-300 p-2">Name</th>
                            <th className="border border-gray-300 p-2">Category</th>
                            <th className="border border-gray-300 p-2">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets.map((pet) => (
                            <tr key={pet.id}>
                                <td className="border border-gray-300 p-2">{pet.id + 1}</td>
                                <td className="border border-gray-300 p-2">{pet.name}</td>
                                <td className="border border-gray-300 p-2">{pet.category}</td>
                                <td className="border border-gray-300 p-2">
                                    <button
                                        onClick={() => handleViewCard(pet)}
                                        className="border bg-green-300 px-2 py-1"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Pets;
