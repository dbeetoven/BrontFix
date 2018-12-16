/**
 * @description class profesion task to map to view.
 * @author dbeetoven
 * @date 2018-12-16
 * @export
 * @class Tasks
 */
export class Tasks {
  public title: string
  public description: string
  public salaryRange: string
  public imageUrl: string

  /**
   *Creates an instance of Tasks.
   * @author dbeetoven
   * @date 2018-12-16
   * @param {string} title
   * @param {string} description
   * @param {string} salaryRange
   * @param {string} imageUrl
   * @memberof Tasks
   */
  constructor(
    title: string,
    description: string,
    salaryRange: string,
    imageUrl: string
  ) {
    this.title = title
    this.description = description
    this.salaryRange = salaryRange
    this.imageUrl = imageUrl
  }
}
