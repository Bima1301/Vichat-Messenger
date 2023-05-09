const menu = [
    {
        name: 'Dashboard',
        path: '/dashboard',

    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
    },
]
const Navbar = () => {
    return (
        <>
            <>
                {/* <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'>
                Hello index page
            </div> */}
                <div className='bg-white shadow-md  top-0 fixed z-50 w-full p-5 flex justify-between'>
                    <div className="flex space-x-2 items-center font-bold text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-badge-hd" viewBox="0 0 16 16">
                            <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z" />
                            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                        </svg><div>
                            Bima Sakti
                        </div>
                    </div>
                    <div>
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search" required />
                            </div>
                            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex">
                    <aside className="w-1/5 bg-blue-700 h-screen overflow-y-auto sticky  left-0 top-0 pt-24 p-5 pr-0">
                        <div className="space-y-4">
                            {menu.map((item, index) => (
                                <div key={index} className="hover:bg-white rounded-lg shadow-md p-5 text-lg text-white hover:text-blue-700 font-bold cursor-pointer duration-500 transition-all rounded-r-none flex items-center space-x-4 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-speedometer2" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                        <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                                    </svg>
                                    <div>
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                    <main className="flex w-4/5 pt-24">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente velit debitis sint sequi aspernatur reiciendis beatae incidunt, doloremque aliquid, assumenda officiis iure in ut dignissimos facere minus inventore iusto reprehenderit officia necessitatibus! Iusto amet voluptatem quidem architecto delectus nihil optio ea ratione sed voluptatum doloribus distinctio error eos aperiam, aspernatur earum dicta dolore. Pariatur rerum iste maxime? Perspiciatis quaerat, veritatis voluptas nesciunt excepturi reiciendis aperiam praesentium, recusandae iste fugiat, dignissimos laudantium asperiores a suscipit sapiente delectus. Suscipit eius culpa vero, officiis odio voluptatum delectus consequuntur ab magni perspiciatis accusantium reprehenderit aspernatur quisquam nemo eos aliquam minima numquam hic ut dicta!
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dolorem adipisci beatae aliquam natus rerum totam asperiores sit voluptates excepturi officiis quam distinctio quo nesciunt reprehenderit minus, magni quas! Maiores, quis modi! Officiis quam, consequuntur laborum sed dolor nesciunt minus natus sapiente? Facilis illo rem amet? Repellendus optio fuga eligendi a quis. Dolorum, consequuntur numquam doloremque porro voluptate ea aspernatur vitae mollitia minima ullam consequatur quis, quibusdam quia maxime laudantium sint hic? Assumenda aperiam dolorem eum voluptas similique repellendus unde consectetur earum, beatae officia, reprehenderit dolorum. Possimus sapiente quidem debitis repudiandae architecto incidunt. Non at laudantium nam praesentium cumque, tempore debitis reiciendis voluptas. Ipsam porro tenetur, laudantium qui, temporibus dolorum cupiditate dignissimos doloribus maiores at delectus similique, distinctio modi non amet laboriosam eius veniam. Libero et eaque, placeat magnam nisi quibusdam adipisci accusamus distinctio assumenda soluta necessitatibus at quas odit officia commodi vel fugiat? Soluta, ducimus libero eius amet inventore sint ullam maxime. Nemo, eos. Eaque laudantium quidem architecto reprehenderit neque velit optio cupiditate nisi unde ullam minima, ea modi inventore maiores totam! Sunt, inventore. Vel quidem nemo rerum aut explicabo. Architecto distinctio, vitae fugiat veniam pariatur et sequi magnam assumenda autem nisi odit porro modi repellat voluptatum aperiam odio?
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis rerum, dignissimos dicta aut accusamus cupiditate numquam nobis quam voluptatem at iure officia repudiandae modi. Illum quas, eius aspernatur inventore rerum repudiandae asperiores, eos illo quod modi, voluptate repellat. Sed consequatur nisi molestiae deserunt, aliquam dolorum est autem officia quam nesciunt sint aspernatur ea, nam harum sit aperiam omnis repellat iste commodi, id debitis? Provident optio aliquid maiores, delectus explicabo, fugit quod assumenda vel sunt illum beatae eius adipisci molestiae! Labore quaerat quibusdam explicabo, nulla, sapiente consequuntur velit ab asperiores placeat doloribus voluptas eligendi nemo nam, dolorum enim. Explicabo ipsum deserunt iusto recusandae illum molestias doloribus, necessitatibus quia minus assumenda obcaecati vitae architecto pariatur nobis consequuntur eius quae esse possimus, sed tenetur. Vel animi facere commodi officia magni sequi eum odio minima esse. Tempora quaerat sed fugiat labore perspiciatis, consequatur repudiandae hic praesentium ipsum accusamus numquam similique beatae placeat minus rerum consectetur iste nisi minima reprehenderit quod. Delectus corrupti a corporis vitae eaque assumenda exercitationem, error fugit hic animi quam ut quae accusamus architecto alias quis nemo rem? Nostrum iusto veritatis explicabo, atque vel obcaecati totam fugiat quaerat in unde, neque et a doloremque voluptatibus, distinctio dolore quis eos itaque exercitationem minus sed facilis culpa? Commodi, expedita cupiditate quo recusandae repellat quam illum dolorum ad magni inventore fugiat voluptates accusamus non mollitia saepe dicta voluptatem accusantium eius. Dolor sint, a autem quae quaerat magnam officiis placeat debitis eos assumenda. Exercitationem vel iusto sapiente earum! Quo molestiae repellendus nihil illo perferendis nostrum maxime? Pariatur doloribus facere minus saepe. Eaque vero aliquid beatae non nisi laboriosam hic expedita facilis, saepe mollitia suscipit quasi quis velit harum maiores neque iste eos voluptate optio perferendis recusandae delectus dolorum? Dignissimos corrupti voluptate dolorem libero illo, laudantium molestiae necessitatibus reiciendis hic inventore, harum, eligendi dicta obcaecati quam.
                    </main>
                </div>
            </></>
    );
}

export default Navbar;