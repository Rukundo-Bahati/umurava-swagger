/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: Umurava-challenge Backend API
 *   version: 1.0.0
 *   description: API documentation for Umurava-challenge backend services
 *   contact:
 *     name: Support
 *     url: https://www.example.com/support
 *     email: rukundorca@gmail.com
 * servers:
 *   - url: 'http://localhost:5000/api/challenges'
 *     description: Local development server
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     responses:
 *       200:
 *         description: List of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 */
export const userRoutesDocs = {
    get: {
      summary: "Get all users",
      description: "Retrieve a list of all users.",
      responses: {
        200: {
          description: "List of users.",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "string" },
                    username: { type: "string" },
                    email: { type: "string" },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  
  /**
   * @swagger
   * /api/auth/login:
   *   post:
   *     summary: Log in a user
   *     description: Authenticate a user and return a token.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: Successful login, returns user info and token
   *       400:
   *         description: Invalid credentials
   */
  export const authRoutesDocs = {
    post: {
      summary: "Log in a user",
      description: "Authenticate a user and return a token.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful login, returns user info and token",
        },
        400: {
          description: "Invalid credentials",
        },
      },
    },
  };
  
  /**
   * @swagger
   * /api/challenges:
   *   get:
   *     summary: Get all challenges
   *     description: Retrieve a list of all challenges.
   *     responses:
   *       200:
   *         description: List of challenges.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: string
   *                   name:
   *                     type: string
   *                   description:
   *                     type: string
   */
  
  /**
   * @swagger
   * /api/challenges/create:
   *   post:
   *     summary: Create a new challenge
   *     description: Add a new challenge to the system.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *               prize:
   *                 type: string
   *               deadline:
   *                 type: string
   *               email:
   *                 type: string
   *               skills:
   *                 type: array
   *                 items:
   *                   type: string
   *               level:
   *                 type: string
   *                 enum: ["Junior", "Intermediate", "Senior"]
   *                 default: "Junior"
   *               timeline:
   *                 type: string
   *                 default: "7 days"
   *               description:
   *                 type: string
   *                 default: "No description provided"
   *               brief:
   *                 type: string
   *               tasks:
   *                 type: string
   *               status:
   *                 type: string
   *                 enum: ["Open", "Ongoing", "Completed"]
   *                 default: "Open"
   *     responses:
   *       201:
   *         description: Challenge created successfully
   *       400:
   *         description: Invalid input
   *       500:
   *         description: Server error
   */
  export const challengeCreateRouteDocs = {
    post: {
      summary: "Create a new challenge",
      description: "Add a new challenge to the system.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: { type: "string" },
                prize: { type: "string" },
                deadline: { type: "string" },
                email: { type: "string" },
                skills: { type: "array", items: { type: "string" } },
                level: { type: "string", enum: ["Junior", "Intermediate", "Senior"], default: "Junior" },
                timeline: { type: "string", default: "7 days" },
                description: { type: "string", default: "No description provided" },
                brief: { type: "string" },
                tasks: { type: "string" },
                status: { type: "string", enum: ["Open", "Ongoing", "Completed"], default: "Open" }
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Challenge created successfully",
        },
        400: {
          description: "Invalid input",
        },
        500: {
          description: "Server error",
        },
      },
    },
  };
  
  /**
   * @swagger
   * /api/challenges/{id}:
   *   get:
   *     summary: Get a specific challenge
   *     description: Retrieve a specific challenge by ID.
   *     responses:
   *       200:
   *         description: Challenge details
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: string
   *                 name:
   *                   type: string
   *                 description:
   *                   type: string
   *       404:
   *         description: Challenge not found
   *   put:
   *     summary: Update a specific challenge
   *     description: Update an existing challenge by ID.
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *               prize:
   *                 type: string
   *               deadline:
   *                 type: string
   *               email:
   *                 type: string
   *               skills:
   *                 type: array
   *                 items:
   *                   type: string
   *               level:
   *                 type: string
   *                 enum: ["Junior", "Intermediate", "Senior"]
   *                 default: "Junior"
   *               timeline:
   *                 type: string
   *                 default: "7 days"
   *               description:
   *                 type: string
   *                 default: "No description provided"
   *               brief:
   *                 type: string
   *               tasks:
   *                 type: string
   *               status:
   *                 type: string
   *                 enum: ["Open", "Ongoing", "Completed"]
   *                 default: "Open"
   *     responses:
   *       200:
   *         description: Challenge updated successfully
   *       400:
   *         description: Invalid input
   *       404:
   *         description: Challenge not found
   *   delete:
   *     summary: Delete a specific challenge
   *     description: Remove a challenge from the system by ID.
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Challenge deleted successfully
   *       404:
   *         description: Challenge not found
   */
  export const challengeDetailRouteDocs = {
    get: {
      summary: "Get a specific challenge",
      description: "Retrieve a specific challenge by ID.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: {
          description: "Challenge details",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  name: { type: "string" },
                  description: { type: "string" },
                },
              },
            },
          },
        },
        404: {
          description: "Challenge not found",
        },
      },
    },
    put: {
      summary: "Update a specific challenge",
      description: "Update an existing challenge by ID.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" },
        },
      ],
      requestBody: {
        required: true,
        content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  prize: { type: "string" },
                  deadline: { type: "string" },
                  email: { type: "string" },
                  skills: { type: "array", items: { type: "string" } },
                  level: { type: "string", enum: ["Junior", "Intermediate", "Senior"], default: "Junior" },
                  timeline: { type: "string", default: "7 days" },
                  description: { type: "string", default: "No description provided" },
                  brief: { type: "string" },
                  tasks: { type: "string" },
                  status: { type: "string", enum: ["Open", "Ongoing", "Completed"], default: "Open" }
                },
              },
            },
          },
      },
      responses: {
        200: {
          description: "Challenge updated successfully",
        },
        400: {
          description: "Invalid input",
        },
        404: {
          description: "Challenge not found",
        },
      },
    },
    delete: {
      summary: "Delete a specific challenge",
      description: "Remove a challenge from the system by ID.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: {
          description: "Challenge deleted successfully",
        },
        404: {
          description: "Challenge not found",
        },
      },
    },
  };
  