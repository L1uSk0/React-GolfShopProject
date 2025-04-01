# React-GolfShopProject
SoftUni React Project

1.Project name
-Jerni's Golf Shop

2.Purpose - what the project does
-Allows people to display and sell their items on our website

3.Features 
-User authentication with Login and Register
-CRUD Operations -> you can create , edit and delete items.
-Display of all the products on the catalog page
-Shopping cart functionality with Add , Remove and Purchase
-Stock management - updates stocks on the server when purchased
-Search fucntionality at the catalog page
-Responsive UI

4.Technologies used 
-React(Vite) , React hooks(Custom and build in) , Context API , react-router-dom for Frontend
-SoftUni practice server for backend
-GoogleCloud hosting the backend
-Firebase holding the front end
-Link between Firebase and GCP
-Workflow between GitHub and firebase for automatic updates when pushing in github.

5.Structure 
/src
   /api  -> authApi to control the register,login and logout process
   /components - holding the react components used
   /contexts - creating UserContext and CartContext
   /guards - creating AuthGuard and GuestGuard
   /hooks - creating useAuth and usePersistedState
   /providers - userProvider
   /services - requests

6.Future improvements 
-Implementing a real database
-Improving UI