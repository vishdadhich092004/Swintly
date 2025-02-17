export interface IUser {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  role: string;
  credits: number;
  createdCoupons: ICoupon[];
  purchasedCoupons: ICoupon[];
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface ICoupon {
  title: string;
  code: string;
  description: string;
  category: string;
  discount: number;
  price: number;
  expiryDate: Date;
  createdBy: IUser;
  purchasedBy: IUser[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}
export interface ITransaction {
  coupon: ICoupon;
  user: IUser;
  seller: IUser;
  amount: number;
  transactionDate: Date;
  paymentStatus: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface ICategory {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface IReview {
  coupon: ICoupon;
  user: IUser;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface INotification {
  user: IUser;
  message: string;
  isRead: boolean;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface IPayment {
  transaction: ITransaction;
  paymentMethod: string;
  amount: number;
  user: IUser;
  paymentDate: Date;
  paymentStatus: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}
