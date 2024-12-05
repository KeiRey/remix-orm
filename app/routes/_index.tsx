/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MetaFunction } from "@remix-run/node";
import { Form, Link, useLoaderData, useSubmit } from "@remix-run/react";
import { Plus, Trash2 } from "lucide-react";
import Balance from "~/components/Balance";
import Income from "~/components/Income";
import Expense from "~/components/Expense";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { formatCurrency } from "~/libs/currency";
import { getMoney } from "~/libs/get-money";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return json(await db.transaction.findMany({
    include: {
      category: {
        select: {
          name: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  }))
}

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData()
  const id = formData.get("id") as string

  await db.transaction.update({
    where: {
      id
    },
    data : {
      category: {
        deleteMany: {
          transactionId: id
        }
      }
    }
  })

  await db.transaction.delete({
    where: {
      id
    }
  })
  return null
}

export default function Index() {
  const transactions = useLoaderData<any[]>();
  const submit = useSubmit()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const isConfirm = confirm("Are you sure?")
    if (!isConfirm) return
    submit(formData, { method: "post" })
  }

  return (
    <div className="grid sm:justify-center text-neutral-800">
      <div className="grid justify-center content-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Balance money={formatCurrency(getMoney(transactions, "balance"))} />
        <Income money={formatCurrency(getMoney(transactions, "income"))} />
        <Expense money={formatCurrency(getMoney(transactions, "expense"))} />
      </div>
      <section>
        <h3>History</h3>
        <div className="max-h-60 py-2 overflow-auto space-y-2">
          {transactions?.map((transaction : any) => (
            <div key={transaction.id} className="bg-white text-neutral-800 flex justify-between p-3">
              <p>{transaction.name}</p>
              <div className="flex items-center gap-3">
                <p>{formatCurrency(transaction.money)}</p>
                <Form method="post" onSubmit={handleSubmit}>
                  <input type="hidden" name="id" value={transaction.id} />
                  <button type="submit"><Trash2 size={15} /></button>
                </Form>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Link to={'/new-transaction'} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 text-sm flex items-center justify-center gap-2">
        <Plus />
        Transaction
      </Link>
    </div>
  );
}

