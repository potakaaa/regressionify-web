//     "regression_summary": {
//         "coefficient_names": [
//             "const",
//             "column 1",
//             "column 2"
//         ],
//         "coefficient_values": [
//             2.1666666666666647,
//             -0.01666666666666662,
//             0.1666666666666665
//         ],
//         "p_values": [
//             0.21664001343263048,
//             0.8192246184844536,
//             0.7817821097640079
//         ],
//         "r_squared": 0.04761904761904734,
//         "adj_r_squared": -0.9047619047619053,
//         "mse": 0.5333333333333334,
//         "rmse": 0.7302967433402215,
//         "nrmse": 0.36514837167011077
//     }
// }

import { create } from "zustand";

type Results = {
  coefficient_names: string[];
  setCoefficientNames: (coefficient_names: string[]) => void;
  coefficient_values: number[];
  setCoefficientValues: (coefficient_values: number[]) => void;
  p_values: number[];
  setPValues: (p_values: number[]) => void;
  r_squared: number;
  setRSquared: (r_squared: number) => void;
  adj_r_squared: number;
  setAdjRSquared: (adj_r_squared: number) => void;
  mse: number;
  setMSE: (mse: number) => void;
  rmse: number;
  setRMSE: (rmse: number) => void;
  nrmse: number;
  setNRMSE: (nrmse: number) => void;
};

type ResultList = {
  results: Results[];
  setResults: (results: Results[]) => void;
};

export const useResults = create<ResultList>((set) => ({
  results: [],
  setResults: (results) => set({ results }),
}));
