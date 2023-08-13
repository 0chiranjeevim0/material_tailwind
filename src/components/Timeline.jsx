import {Timeline,TimelineConnector,TimelineIcon,TimelineHeader,TimelineItem,Typography} from '@material-tailwind/react';
import {BellIcon,ArchiveBoxIcon,CurrencyDollarIcon,} from '@heroicons/react/24/solid';


const TimelineComp = () =>{



    return(
        <div className="w-full">
            <Timeline>
                <TimelineItem className="h-28">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon className="p-3" color="blue" variant="ghost">
                        <BellIcon className="h-5 w-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            $2400, Design changes
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            22 DEC 7:20 PM
                        </Typography>
                        </div>
                    </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon  color="green" className="p-3" variant="ghost">
                        <ArchiveBoxIcon className="h-5 w-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            $2400, Design changes
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            22 DEC 7:20 PM
                        </Typography>
                        </div>
                    </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-28">
                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                        <TimelineIcon  color="red" className="p-3" variant="ghost">
                        <CurrencyDollarIcon className="h-5 w-5" />
                        </TimelineIcon>
                        <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            $2400, Design changes
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            22 DEC 7:20 PM
                        </Typography>
                        </div>
                    </TimelineHeader>
                </TimelineItem>
            </Timeline>
        </div>
    )
};


export default TimelineComp;