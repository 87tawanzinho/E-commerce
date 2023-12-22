import Image from "next/image"

export default function FirstSection() {
    return (
     <div className="flex flex-wrap ">
        <img src="https://www.gudrunsjoden.com/storage/DD40D82AE1953CE28695B02DFE7DDB6876C3740AEEA0F34D0D9EA4035C974E50/bdf99ef7b6a64e45aa86bfe46dff0cd4/jpg/media/1704f2ea62c940cd8a0647449048372d/Hero_1_UK.jpg?width=2560&auto=webp"   alt="" />
       <div className="flex justify-center items-center   flex-wrap">
   <div className="flex justify-center items-center flex-col text-center">
   <img src="https://www.gudrunsjoden.com/storage/4BD47522E33A320AE218A05E2ECCEBA05AB81E1FB2EA5529DB1F7349F16DEE85/58784c54ef4a48979a58dc77a01bae01/jpg/media/036ddd6b361f4a94af29dec6ad8c67bc/02.jpg?width=2560&auto=webp" className=" h-three" alt="" />
   <p className=" text-xl  lg:text-3xl text-gray-600 mt-4">Unique dresses</p>
   <p className="text-gray-600">Create a stylish look with bold design and colours</p>
   <a className="underline text-xl text-gray-700">Explore Here </a>
   </div>
      <div  className="flex justify-center items-center flex-col text-center">
      <img src="https://www.gudrunsjoden.com/storage/D83E4DC79A88A221C8817845BD877CB1EFC68405EC3E2330DE77EB97666171E0/7c100ceae2814f72a25ba2f0d37923ba/jpg/media/2f4f67e732d343099f7e714521ef0199/03.jpg?width=2560&auto=webp" className=" h-three" alt="" />
  
   <p className="text-xl   lg:text-3xl text-gray-600 mt-4">Party-perfect blouses</p>
   <p className="text-gray-600">Exquisite details and soft-touch fabrics</p>
   <a className="underline text-xl text-gray-700">More styles  </a>
      </div>
    <div  className="flex justify-center items-center flex-col text-center">
    <img src="https://www.gudrunsjoden.com/storage/FD50E632E8FB00FD51FE1CA81A1C19839543D940DB13A1E563E4291A9607BD02/8d30d731129844b197cb8360bf348da6/jpg/media/49477167717244e19e72420473b41709/04.jpg?width=2560&auto=webp" className="h-three" alt="" />
 
   <p className="text-xl   lg:text-3xl text-gray-600 mt-4">Creative cardigans</p>
   <p className="text-gray-600">Treat yourself to a beautiful go-to that feels like a warm embrace</p>
   <a className="underline text-xl text-gray-700">All cardigans</a>
    </div>
       </div>

     </div>
    )
}