import mongoose, { Schema, Model, Document } from 'mongoose';

type FavDocument = Document & {
  link: string;
};

type FavInput = {
    link: FavDocument['link'];
};

const favSchema = new Schema(
  {
    link: {
      type: Schema.Types.String,
      required: true
    }
  },
  {
    collection: 'fav',
    timestamps: true,
  },
);

const Fav: Model<FavDocument> = mongoose.model<FavDocument>('Fav', favSchema);
  
export { Fav, FavInput, FavDocument };