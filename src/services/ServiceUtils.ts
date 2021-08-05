const ServiceUtils = {
  async handleResponse(req: Promise<any>) {
    return await req.then((resp) => {
      if (resp.ok) {
        return resp.json()
      } else {
        throw new Error(resp.json())
      }
    })
  },
}

export default ServiceUtils
