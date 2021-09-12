import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="text-light py-2 text-primary">Dashboard de Vendas</h2>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-sencodary">Porcentagem de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-sencodary">Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
