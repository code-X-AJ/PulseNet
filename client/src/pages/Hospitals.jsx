import Navbar from "../components/Navbar";
import Card from '../components/card';

export default function Hospitals() {
    return (
        <div>
            <Navbar />
            <div className="m-20 grid grid-cols-4 gap-y-16">
                <Card Name={"PGIMER"} address={"sector-12,Chandigarh"} features={"open 24/7"}/>
                <Card Name={"PGIMER"} address={"sector-12,Chandigarh"} features={"open 24/7"}/>
                <Card Name={"PGIMER"} address={"sector-12,Chandigarh"} features={"open 24/7"}/>
                <Card Name={"PGIMER"} address={"sector-12,Chandigarh"} features={"open 24/7"}/>
                <Card Name={"PGIMER"} address={"sector-12,Chandigarh"} features={"open 24/7"}/>
                <Card Name={"PGIMER"} address={"sector-12,Chandigarh"} features={"open 24/7"}/>
                <Card Name={"PGIMER"} address={"sector-12,Chandigarh"} features={"open 24/7"}/>
                <Card Name={"PGIMER"} address={"sector-12,Chandigarh"} features={"open 24/7"}/>
            </div>
        </div>
    );
}
