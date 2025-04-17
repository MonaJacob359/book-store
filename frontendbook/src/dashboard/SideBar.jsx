import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImage from "../assets/profile.jpg"; 
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider"; 

const SideBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      {/* <Sidebar.Logo 
        href="/" 
        img={user?.photoURL || userImage} 
        imgAlt="User profile"
        className="w-10 h-10 bg-rose-600  rounded-full "
      >
        <p className="text-white ml-1 bg-blue-700/80 py-1 px-2 rounded-lg text-sm">
          {user?.displayName || "demo user"}
        </p>
      </Sidebar.Logo> */}
      <Sidebar.Logo className="bg-white shadow-sm py-1.4 px-3 h-10 rounded-lg">
<div className="flex justify-between w-full">
<img 
src={user?.photoURL || userImage} 
alt="User profile"
className="w-8 h-8 rounded-full object-cover"
/>
  <p className="text-gray-900/65 ml-1 py-1 px-2  rounded-lg text-sm">
    {user?.displayName || "Demo User"}
  </p>
</div>
</Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            <p>Upload Book</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            <p>Manage Books</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            <p>Sign In</p>
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            <p>Log Out</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>

          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SideBar;