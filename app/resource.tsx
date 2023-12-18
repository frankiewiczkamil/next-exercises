'use server';
import {wait} from "@/app/common";

export default async function Resource() {
    await wait(6_000, "resource");
    return (
        <div>
            <p>Resource</p>
        </div>
    )
}