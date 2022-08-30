import { MultiSelectComponent } from "@syncfusion/ej2-react-dropdowns";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import "./App.css";

/* import the DropDownList dependency styles */

import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";
function App() {
  // const sportsData = [
  //   "Cricket",
  //   "Badminton",
  //   "FootBall",
  //   "VolleyBall",
  //   "Chess",
  //   "Hockey",
  //   "Gaming",
  // ];

  // const sportsData = [
  //   { id: "game1", sports: "badminton" },
  //   { id: "game2", sports: "Cricket" },
  //   { id: "game3", sports: "FootBall" },
  //   { id: "game4", sports: "Hockey" },
  //   { id: "game5", sports: "VolleyBall" },
  //   { id: "game6", sports: "BasketBall" },
  //   { id: "game7", sports: "Gaming" },
  //   { id: "game8", sports: "Hiking" },
  //   { id: "game9", sports: "Riding" },
  //   { id: "game10", sports: "Chess" },
  //   { id: "game11", sports: "CarromBoard" },
  // ];

  const remoteData: DataManager = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/Employees",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

  // const data: Query = new Query();

  return (
    <div className="multi-selecting">
      <MultiSelectComponent
        placeholder="Hello How Are You"
        dataSource={remoteData}
        fields={{ value: "EmployeeID", text: "FirstName" }}
      ></MultiSelectComponent>
    </div>
  );
}

export default App;
