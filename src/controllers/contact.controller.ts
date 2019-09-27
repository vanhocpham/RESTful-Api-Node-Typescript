import { Request, Response } from "express";
import Contact from "../models/contact.model";
import message from "../configs/response";

class ContactController {
  /**
   * Get all contact or by id
   * @param req 
   * @param res 
   */
  public async index(req: Request, res: Response) {
    let response = null;

    if (req.query._id) {
      response = await Contact.findOne({ _id: req.query._id });
      return res.status(200).json({ message: message.PASS, data: response });
    }
    response = await Contact.find({});

    res.status(200).json({ message: message.PASS, data: response });
  }

  /**
   *  Create Contact
   * @param req 
   * @param res 
   */
  public async create(req: Request, res: Response) {
    const newContact = await new Contact(req.body);

    await newContact.save(console.error());
    res.status(201).json({ message: message.PASS, data: newContact });
  }

  /**
   * Update a contact
   * @param req 
   * @param res 
   */
  public async update(req: Request, res: Response) {
    if ( !req.query._id ) {
      return res.status(200).json({ message: message.ERROR, data: null });
    }
    const contactUpdate = await Contact.findOneAndUpdate( { "_id": req.query._id }, { "$set" : req.body }, { "new": true } );

    await contactUpdate.save();
    return res.status(200).json({ message: message.PASS, data: contactUpdate });
  }

  /**
   * Delete a contact
   * @param req 
   * @param res 
   */
  public async delete(req: Request, res: Response) {
    if ( !req.query._id ) {
      return res.status(200).json({ message: message.ERROR, data: null });
    }
    await Contact.findOneAndDelete( { "_id": req.query._id } );

    return res.status(200).json({ message: message.PASS, data: null });
  }
}

export default new ContactController();
