import { Tabs, TabsHeader, Tab} from '@material-tailwind/react';
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const TabsComp = () => {
    const data = [
        {
            label: "Home",
            value: "home",
            icon: Square3Stack3DIcon,
            desc: `We're not always in the position that we want to be at...`
        },
        {
            label: "Community",
            value: "community", // Change this value to differentiate tabs
            icon: UserCircleIcon,
            desc: `We're not always in the position that we want to be at...`
        },
        {
            label: "Inbox",
            value: "inbox", // Change this value to differentiate tabs
            icon: Cog6ToothIcon,
            desc: `We're not always in the position that we want to be at...`
        },
        {
            label: "Tasks",
            value: "tasks", // Change this value to differentiate tabs
            icon: Cog6ToothIcon,
            desc: `We're not always in the position that we want to be at...`
        },
        {
            label: "Projects",
            value: "projects", // Change this value to differentiate tabs
            icon: Cog6ToothIcon,
            desc: `We're not always in the position that we want to be at...`
        },
    ];

    const [activeTab, setActiveTab] = useState("home"); // Default active tab

    return (
        <div className="w-full mt-2">
            <Tabs className="w-full" value={activeTab} orientation="vertical">
                <TabsHeader className="w-[350px]">
                    {data.map(({label, value}) => (
                        <Tab key={value} value={value}  onClick={() => setActiveTab(value)}>
                            <span className="text-start">{label}</span> {/* Move label to the right of the icon */}
                        </Tab>
                    ))}
                </TabsHeader>
            </Tabs>
        </div>
    )
};

export default TabsComp;
