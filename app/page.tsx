import {Suspense} from "react";
import ClientWrapper from "@/app/clientWrapper";
import {wait} from "@/app/common";

const MyComponent = async ({delay, name}: { delay: number, name: string }) => {
    const data = await wait(delay, name);
    return <p>Hello, {data || "world"}</p>;
};

export const dynamic = "force-dynamic";

export default async function Home() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <MyComponent delay={2_000} name={"next 13"}/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <MyComponent delay={4_000} name={"next 14"}/>
            </Suspense>
            <hr/>
            <ClientWrapper/>
        </>
    );
}
