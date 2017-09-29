module Api
  class JobsController < ApplicationController
    def index
      user = User.find(params[:user_id])
      render json: {
        status: 'success', data: user.jobs
      }, status: :ok
    end

    def create
      job = Job.new(job_params)
      if job.save
        render json: {
          status: 'success', data: job
        }, status: :created
      else
        render json: {
          status: 'error', data: job, errors: job.errors
        }, status: :unprocessable_entity
      end
    end

    def destroy
      @job = Job.find(params[:id])
      @job.destroy
    end

    private

    def job_params
      params.require(:job).permit(
        :title, :company, :company_url, :application_url, :point_of_contact, :date_applied,
        :date_posted, :status, :cover_letter, :description, :user_id
      )
    end
  end
end
