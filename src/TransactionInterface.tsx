export default interface Transaction {
  id?: number;
  type: string;
  amount: string;
  transactionName: string;
  transactionDescription: string;
  date: string;
  pending: boolean;
  authorizedUser: string;
}
