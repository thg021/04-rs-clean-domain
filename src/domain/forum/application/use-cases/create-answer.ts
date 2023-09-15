import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Answer } from '@/forum/enterprise/entities/answer'
import { AnswersRepository } from '@/forum/application/repositories/answers-repository'

interface CreateAnswerUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class CreateAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: CreateAnswerUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
