import Card from "../component/card";
import { FaHospitalUser, FaUserDoctor, FaUserNurse } from "react-icons/fa6";
const LoginPage = () => {
  return (
    <section className="p-8 md:px-20 bg-amber-50">
      <div className=" w-full flex flex-col items-center">
        <span className="text-teal-700 font-semibold text-sm inline-block">
          Access Portal
        </span>
        <h3 className="font-semibold text-2xl text-slate-900">
          Choose Your Portal
        </h3>
        <p className="text-sm text-gray-500 mt-4">
          Select your role to access the Great Mind healthcare platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 ">
        <Card
          title="Patient Portal"
          btnText="Patient Login"
          icon={<FaHospitalUser color="teal" />}
          description="Manage appointments, view medical records, prescriptions and  communicate with your doctor"
        />
        <Card
          title="Doctor Portal"
          icon={<FaUserDoctor color="teal" />}
          btnText="Doctor login"
          description="Manage patient records, schedule appointments, and access medical information"
        />
        <Card
          title="Nurse Portal"
          icon={<FaUserNurse color="teal" />}
          btnText="Nurse login"
          description="Monitor patients, update records and manage daily healthcare activities"
        />
      </div>
    </section>
  );
};
export default LoginPage;
