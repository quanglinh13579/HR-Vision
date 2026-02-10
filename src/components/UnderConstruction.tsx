import Layout from "./layout";

interface UnderConstructionProps {
    title?: string;
}

export default function UnderConstruction({ title }: UnderConstructionProps) {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Under Construction</h1>
                <p className="text-gray-500 text-lg">
                    The <span className="font-semibold text-blue-600">{title || "requested"}</span> page is coming soon!
                </p>
            </div>
        </Layout>
    );
}
