const fectHandler = (...args: any[]) => fetch(...args).then((res) => res.json())

export default fectHandler
