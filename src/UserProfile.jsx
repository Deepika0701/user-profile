import React, { useEffect, useState } from "react";
import { FaPhone, FaVenusMars } from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch user data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto flex bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white rounded-2xl shadow-2xl p-8">
      <img
        src={user.picture.large}
        alt="Profile"
        className="w-40 h-40 rounded-2xl border-4 border-white shadow-lg"
      />
      <div className="ml-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold">{user.name.first} {user.name.last}</h2>
        <p className="text-lg mt-2 flex items-center">
          <FaVenusMars className="text-yellow-300 mr-2" /> {user.gender}
        </p>
        <p className="text-lg mt-2 flex items-center">
          <FaPhone className="text-green-300 mr-2" /> {user.phone}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
