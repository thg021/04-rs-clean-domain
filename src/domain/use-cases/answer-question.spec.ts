import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();
  const answer = answerQuestion.execute({
    content: "content",
    instructorId: "instructorId",
    questionId: "questionId",
  });

  expect(answer.content).toEqual("content");
});
