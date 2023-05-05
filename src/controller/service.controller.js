const serviceService = require("../services/service.service");
const { validationResult } = require("express-validator");
const HttpError = require("../utils/error");

const getServiceByBusinessId = async (req, res, next) => {
  try {
    const services = await serviceService.getServiceByBusinessId(req);
    res.status(201).json({
      services,
    });
  } catch (error) {
    next(error);
  }
};
const getServiceItemByBusinessId = async (req, res, next) => {
  try {
    const servicesItem = await serviceService.getServiceItemByBusinessId(req);
    res.status(200).json({
      servicesItem,
    });
  } catch (error) {
    next(error);
  }
};

const addService = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError(`Invalid inputs passed!`, 422);
    const request = req.body;
    const dto = await serviceService.addService(request);
    res.status(201).send(dto);
  } catch (error) {
    next(error);
  }
};

const deleteService = async (req, res, next) => {
  try {
    if (!req.params.serviceId) throw new HttpError(`Require serviceId`, 422);
    const dto = await serviceService.deleteService(req);

    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};

const searchBusinessService = async (req, res, next) => {
  try {
    const dto = await serviceService.searchBusinessService(req);
    res.status(200).json(dto);
  } catch (error) {
    next(error);
  }
};
const addServiceType = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError(`Invalid inputs passed!`, 422);
    const request = req.body;
    const dto = await serviceService.addServiceType(request);
    res.status(201).send(dto);
  } catch (error) {
    next(error);
  }
};
const getServiceItems = async (req, res, next) => {
  try {
    const { serviceId } = req.params;
    const dto = await serviceService.getServiceItemsByServiceId(serviceId);
    return res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};
const addServiceItem = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError(`Invalid inputs passed!`, 422);
    const request = req.body;
    const dto = await serviceService.addServiceItem(request);
    res.status(201).send(dto);
  } catch (error) {
    next(error);
  }
};
const getServices = async (req, res, next) => {
  try {
    const dto = await serviceService.getServices();
    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};
const getDetailServiceItemById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const dto = await serviceService.getDetailItemById(id);

    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }
};
const filterService=async(req,res,next)=>{
  try {
    const {serviceTypeId}=req.params;
    const dto=await serviceService.getServiceByServiceTypeId(serviceTypeId);
  ;
    res.status(200).send(dto);
  } catch (error) {
    next(error);
  }

}

module.exports = {
  filterService,
  addServiceType,
  addService,
  deleteService,
  getServices,
  addServiceItem,
  getServiceItems,
  getServiceByBusinessId,
  getDetailServiceItemById,
  getServiceItemByBusinessId,
  searchBusinessService,
};
