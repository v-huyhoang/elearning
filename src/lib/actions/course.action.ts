"use server";

import { TCreateCourseParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import Course, { ICourse } from "@/database/course.model";

export async function createCourse(params: TCreateCourseParams) {
  try {
    connectToDatabase();
    const newCourse = await Course.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(newCourse)),
    };
  } catch (error) {
    console.log(error);
  }
}
// fetching
export async function getCourseBySlug({
  slug,
}: {
  slug: string;
}): Promise<ICourse | null | undefined> {
  try {
    connectToDatabase();
    const course = await Course.findOne({ slug: slug });
    if (!course) return null;
    return JSON.parse(JSON.stringify(course));
  } catch (error) {
    console.log(error);
  }
}
