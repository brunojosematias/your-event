import * as Dialog from "@radix-ui/react-dialog";
import { Plus } from "phosphor-react";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export function Register() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black bg-opacity-70 backdrop-blur-sm fixed inset-0 z-20" />

      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full">
        <form className="bg-slate-100 rounded-lg mx-6 border-b-[16px] border-indigo-600">
          <div className="bg-indigo-600 py-6 text-center rounded-t-lg">
            <Dialog.Title className="font-bold text-xl">
              your
              <span className="text-white">Event</span>
            </Dialog.Title>
          </div>

          <div className="mx-3">
            <div className="bg-white border-indigo-600 border-solid border-[2px] w-16 h-16 rounded-full -mt-10 flex justify-center items-center">
              <Plus size={24} className="text-indigo-900" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4 mt-10  text-xs font-bold">
                <div>
                  <label htmlFor="name" className="text-indigo-900">
                    Nome*
                  </label>
                  <Input type="text" id="name" />
                </div>

                <div>
                  <label htmlFor="surname" className="text-indigo-900">
                    Sobrenome*
                  </label>
                  <Input type="text" id="surname" />
                </div>
              </div>

              <div className="text-xs font-bold w-72">
                <label htmlFor="email" className="text-indigo-900">
                  E-mail*
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="exemplo@gmail.com"
                />
              </div>

              <div className="text-xs font-bold w-72">
                <label htmlFor="phone" className="text-indigo-900">
                  Telefone
                </label>
                <Input
                  type="number"
                  id="phone"
                  placeholder="(00) 0 0000-0000"
                />
              </div>

              <div className="text-xs font-bold w-72">
                <label htmlFor="password" className="text-indigo-900">
                  Senha*
                </label>
                <Input type="password" id="password" />
              </div>

              <div className="text-xs font-bold w-72">
                <label htmlFor="password" className="text-indigo-900">
                  Repita a senha*
                </label>
                <Input type="password" id="password" />
              </div>
            </div>

            <div className="flex items-center justify-end gap-8 mt-14 pb-7">
              <Dialog.Close>
                <button
                  type="button"
                  className="underline decoration-solid text-xs font-bold"
                >
                  cancelar
                </button>
              </Dialog.Close>

              <div className="text-white font-bold text-xs">
                <Button type="submit">Criar conta</Button>
              </div>
            </div>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
