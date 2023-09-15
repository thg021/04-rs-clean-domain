import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Answer } from '@/forum/enterprise/entities/answer'
import { AnswersRepository } from '@/forum/application/repositories/answers-repository'

interface CreateAnswerUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

interface CreateAnswerUseCaseResponse {
  answer: Answer
}

export class CreateAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: CreateAnswerUseCaseRequest): Promise<CreateAnswerUseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answersRepository.create(answer)

    return { answer }
  }
}
