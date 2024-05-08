import React from 'react'

const page = ({ params }) => {
   const { id } = params;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Task ID: {id}</h1>
    </div>
  );
}

export default page