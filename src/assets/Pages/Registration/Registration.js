import React from 'react';

const Registration = () => {
    return (
        
            <div class="w-full max-w-xs ">
  <form class="bg-white shadow-md rounded px-9 pt-8 pb-8  mb-4 ">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
        Address
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"></input>
      </div>
      <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="comfirm password">
       Confirm Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder=" Comfirm Password"></input>
      </div>
      
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Create Account
      </button>
      
    </div>
  </form>
  <div class="text-center text-gray-500 text-xs">
                    Already have an account?
                    <a class="text-blue-600 hover:underline" href="/Login">
                        Log in
                    </a>
                </div>
</div>
    );
};

export default Registration;