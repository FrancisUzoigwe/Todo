
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const signUser = atomWithStorage("myuser", {} || null);

const useUser = () => {
  return useAtom(signUser);
};

export default useUser;
