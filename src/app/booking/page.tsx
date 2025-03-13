'use client'

import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material"

export default function Booking () {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 ">
            <div className="text-xl font-medium">New Venue</div>

            <div className="w-fit space-y-2">
                <TextField name="Name-Lastname" label="Name-Lastname" variant="standard"></TextField>
            </div>

            <div className="w-fit space-y-2">
                <TextField name="Contact-Number" label="Contact-Number" variant="standard"></TextField>
            </div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Select Venue</div>
                <Select id="venue" name="venue" value="" variant="standard" className="h-[2em] w-[200px]">
                    <MenuItem value="bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="grandtable">The Grand Table</MenuItem>
                    <MenuItem value="sparkspace">Spark Space</MenuItem>
                </Select>
            </div>
            
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Date Reserve</div>
                <DateReserve/>
            </div>
            
            <button 
                name="Book Venue"
                aria-label="Book Venue"
                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" 
                onClick={() => alert("Book Venue")}
            >
                Submit
            </button>
        </main>
    );
}