import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Dashboard () {
    return (
        <div style={{ display: "flex", height:"100vh" }}>
            <Sidebar/>
            <div style={{ flex: 1 }}>
                <Navbar />
                <div style={{padding: "20px"}}>
                    <h2>Projects Table </h2>
                    <table border="1" width="100%">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Project Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Empty for now  */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;