import { AnimatePresence, motion, useAnimation } from "framer-motion"
import type React from "react"
import { useEffect } from "react"

interface LoadingLayoutProps {
    message?: string
}

const LoadingLayout: React.FC<LoadingLayoutProps> = ({
    message = "Cargando...",
}) => {
    const controls = useAnimation()

    useEffect(() => {
        controls.start({
            rotate: [0, 360],
            transition: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        })
    }, [controls])

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxMTEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10" />
                </div>

                <motion.div animate={controls} className="relative w-64 h-64">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#001A72" />
                                <stop offset="100%" stopColor="#FFF212" />
                            </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="1 8" />
                    </svg>
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <img src="https://img.freepik.com/vector-premium/plantilla-logotipo-medico_1283348-16845.jpg?semt=ais_hybrid&w=740" alt="Loading" className="w-40 h-40 object-cover rounded-full" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-20 left-0 right-0 text-center"
                >
                    <h3 className="text-4xl font-thin text-white mb-4 tracking-wider">{message}</h3>
                    <p className="text-lg text-gray-300 font-light">Estamos procesando su petición</p>
                </motion.div>

                <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.2,
                                ease: "easeInOut",
                            }}
                            className="w-2 h-2 bg-white rounded-full"
                        />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default LoadingLayout

