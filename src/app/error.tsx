"use client";
const Error = ({ reset }: { reset: () => void }) => {
    return (
        <div className="flex justify-center items-center p-5 h-dvh">
            <div className="flex flex-col gap-4 justify-center items-center w-full bg-white rounded-xl aspect-[2/3] max-w-[800px] md:aspect-[2]">
                <p className="text-3xl font-bold text-red-600">
                    Something went wrong!
                </p>
                <button onClick={reset}>Try again</button>
            </div>
        </div>
    );
};

export default Error;
