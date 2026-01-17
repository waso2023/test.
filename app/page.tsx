import Image from "next/image";


import Link from 'next/link'

export default function HomePage() {
    return (
        <main className="bg-white min-h-screen">


            <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

                <div className="text-2xl font-bold text-[#163020]">
                    survy
                </div>


                <div className="hidden md:flex items-center space-x-10 text-gray-700">
                    <Link href="/" className="font-medium text-[#163020]">Home</Link>
                    <Link href="/services" className="hover:text-[#163020]">Services</Link>
                    <Link href="/pages" className="hover:text-[#163020]">Pages</Link>
                    <Link href="/contact" className="hover:text-[#163020]">Contact Us</Link>
                </div>

                <Link
                    href="/signin"
                    className="border border-[#cfcfcf] rounded-xl px-5 py-2 text-sm font-medium hover:bg-[#163020] hover:text-white transition"
                >
                    Sign In
                </Link>
            </nav>


            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">


                <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-[#163020] leading-tight">
                        Building Bridges <br />
                        Between You And <br />
                        Customers
                    </h1>

                    <p className="mt-6 text-gray-600 max-w-md">
                        Business ideas at the right price. Challenge everything.
                        Keeping advertising standards high. Research based
                        advertising for the bulls.
                    </p>


                    <div className="flex items-center gap-6 mt-8">
                        <button className="bg-[#b7dfac] text-[#163020] font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition">
                            Get Started
                        </button>

                        <div className="flex items-center gap-4 text-sm text-gray-700">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#b7dfac]">
                                🔗
                            </div>
                            <span>
                Manage your business. <br/>
                The professional way
              </span>
                        </div>
                    </div>
                </div>


                <div className="">
                   <div className={'relative'}>
                      <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        className="rounded-3xl w-full object-cover"
                    />


                    <div className="absolute top-[-35] right-0 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-200 text-sm">
                        <p className="text-gray-500">5000+ RATINGS</p>
                        <p className="font-semibold text-[#163020]">
                            See Our Latest Project
                        </p>
                    </div>
                   </div>
                  <section className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center pt-8">
                <Stat value="450+" label="Projects Done" />
                <Stat value="1.5k+" label="Active Users" />
                <Stat value="850+" label="Lives Impacted" />
                <Stat value="10k+" label="Satisfied Clients" />
            </section>
                </div>
            </section>

        </main>
    )
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div>
            <p className="text-2xl font-bold text-[#163020]">{value}</p>
            <p className="text-gray-600 text-sm mt-1">{label}</p>
        </div>

    )
}

