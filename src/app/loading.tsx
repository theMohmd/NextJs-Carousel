"use client";

const loading = () => {
    return (
        <div className="flex justify-center items-center p-5 h-dvh">
            <div className="px-8 w-full bg-white bg-opacity-50 rounded-xl animate-pulse aspect-[2/3] max-w-[800px] md:aspect-[2]">
                <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 size-full">
                    <div className="m-5 my-10 bg-opacity-50 rounded-md bg-neutral-600" />
                    <div className="flex flex-col justify-center p-5">
                        <div className="w-full h-12 bg-opacity-50 rounded-md bg-neutral-600" />
                        <div className="mt-4 w-full h-36 bg-opacity-50 rounded-md bg-neutral-600" />
                        <div className="flex gap-10 mt-8 h-16">
                            <div className="mt-4 bg-opacity-50 rounded-md grow bg-neutral-600" />
                            <div className="mt-4 bg-opacity-50 rounded-md grow bg-neutral-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default loading;
