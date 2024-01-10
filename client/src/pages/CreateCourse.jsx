import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  age: z.number().min(0, {
    message: "age must be a number",
  }),
  topic: z.string().min(2,{
    message:"Please enter a topic more than 2 characters"
  })
});

const onSubmit = () => {
  
};

const CreateCourse = () => {
  const form = useForm(formSchema);
  return (
    <div className="min-h-screen flex flex-col items-center mt-8">
      <p className="text-4xl font-medium">Let's get Started!</p>
      <div className="mt-28">
        <Form {...form} className="w-full mt-32">
          <form onSubmit={form.handleSubmit(onSubmit)} className=" flex gap-8 justify-center">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl ">Enter your Age</FormLabel>
                  <FormControl>
                    <Input placeholder="age" className="w-[250px] text-black"{...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl">Enter the Topic</FormLabel>
                  <FormControl>
                    <Input placeholder="topic" className="w-[250px] text-black"{...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
           
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateCourse;
